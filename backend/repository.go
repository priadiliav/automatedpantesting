package main

import (
	"log"
	"os"

	git "github.com/go-git/go-git/v5"
)

func cloneRepo(url, path string) {
	if _, err := os.Stat(path); !os.IsNotExist(err) {
		log.Printf("Repository already exists at %s, skipping clone.", path)
		return
	}

	_, err := git.PlainClone(path, false, &git.CloneOptions{
		URL:      url,
		Progress: os.Stdout,
	})
	if err != nil {
		log.Fatalf("Failed to clone repository: %s", err)
	}
}
