package main

import (
	"bytes"
	"encoding/csv"
)

type Vulnerability struct {
	GroupName        string
	ProjectName      string
	Tool             string
	ScannerName      string
	Status           string
	Vulnerability    string
	Details          string
	AdditionalInfo   string
	Severity         string
	CVE              string
	CWE              string
	OtherIdentifiers string
	DetectedAt       string
	Location         string
	Activity         string
	Comments         string
	FullPath         string
	CVSSVectors      string
	DismissalReason  string
}

func parseCSVData(data []byte) ([]Vulnerability, error) {
	reader := csv.NewReader(bytes.NewReader(data))
	records, err := reader.ReadAll()
	if err != nil {
		return nil, err
	}

	var vulnerabilities []Vulnerability
	for _, record := range records[1:] {
		vuln := Vulnerability{
			GroupName:        record[0],
			ProjectName:      record[1],
			Tool:             record[2],
			ScannerName:      record[3],
			Status:           record[4],
			Vulnerability:    record[5],
			Details:          record[6],
			AdditionalInfo:   record[7],
			Severity:         record[8],
			CVE:              record[9],
			CWE:              record[10],
			OtherIdentifiers: record[11],
			DetectedAt:       record[12],
			Location:         record[13],
			Activity:         record[14],
			Comments:         record[15],
			FullPath:         record[16],
			CVSSVectors:      record[17],
			DismissalReason:  record[18],
		}
		vulnerabilities = append(vulnerabilities, vuln)
	}
	return vulnerabilities, nil
}
