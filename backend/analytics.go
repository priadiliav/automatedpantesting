package main

import (
	"fmt"
	"os/exec"
)

func main() {
	// Define the Metasploit command
	cmd := exec.Command()

	// Run the command and capture the output
	output, err := cmd.CombinedOutput()
	if err != nil {
		fmt.Printf("Error: %s\n", err)
		return
	}

	// Print the output
	fmt.Printf("Output: %s\n", output)
}
