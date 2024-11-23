package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

// ParseFormData parses the multipart form data from the request
func ParseFormData(r *http.Request) (string, []byte, error) {
	err := r.ParseMultipartForm(10 << 20) // 10 MB limit
	if err != nil {
		return "", nil, fmt.Errorf("error parsing form data: %v", err)
	}

	repoURL := r.FormValue("repoURL")
	if repoURL == "" {
		return "", nil, fmt.Errorf("missing repoURL")
	}

	file, _, err := r.FormFile("csvFile")
	if err != nil {
		return "", nil, fmt.Errorf("error retrieving the file: %v", err)
	}
	defer file.Close()

	fileBytes, err := ioutil.ReadAll(file)
	if err != nil {
		return "", nil, fmt.Errorf("error reading file content: %v", err)
	}

	return repoURL, fileBytes, nil
}

// ProcessRepo clones the repository and parses the CSV file
func ProcessRepo(repoURL string, csvData []byte) error {
	clonePath, _ := extract_repository_name(repoURL)
	cloneRepo(repoURL, clonePath)

	vulnerabilities, err := parseCSVData(csvData)
	if err != nil {
		return fmt.Errorf("error parsing CSV: %v", err)
	}

	for _, vuln := range vulnerabilities {
		fmt.Printf("Vulnerability: %+v\n", vuln)
	}

	return nil
}
