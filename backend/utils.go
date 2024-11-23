package main

import "strings"

func extract_repository_name(repoURL string) (string, error) {
	parts := strings.Split(repoURL, "/")
	repoName := parts[len(parts)-1]
	clonePath := "./" + repoName
	return clonePath, nil
}
