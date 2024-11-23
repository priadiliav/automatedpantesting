package main

import (
	"fmt"
	"log"
	"os/exec"
)

func runContainer(repoName string, containerName string) {
	cmd := exec.Command("./scripts/run.sh", repoName, containerName)
	output, err := cmd.CombinedOutput()
	if err != nil {
		log.Fatalf("Failed to run script: %s\nOutput: %s", err, output)
	}
	fmt.Printf("Script output: %s\n", output)
}

func stopAndDeleteContainer(containerName string) {
	stopCmd := exec.Command("./scripts/stop.sh", containerName)
	stopOutput, err := stopCmd.CombinedOutput()
	if err != nil {
		log.Fatalf("Failed to stop container: %s\nOutput: %s", err, stopOutput)
	}
	fmt.Printf("Stop script output: %s\n", stopOutput)
}
