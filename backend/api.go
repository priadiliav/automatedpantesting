package main

import (
	"net/http"
)

func repoHandler(w http.ResponseWriter, r *http.Request) {
	repoURL, csvFilePath, err := ParseFormData(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err = ProcessRepo(repoURL, csvFilePath)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func main() {
	http.HandleFunc("POST /repo", repoHandler)
	http.ListenAndServe(":8080", nil)
}
