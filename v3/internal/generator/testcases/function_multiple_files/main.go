package main

import (
	_ "embed"
	"log"

	"github.com/KrakenTech-LLC/wails/v3/pkg/application"
)

func main() {
	app := application.New(application.Options{
		Services: []application.Service{
			NewGreetService(),
		},
	})

	app.Window.New()

	err := app.Run()

	if err != nil {
		log.Fatal(err)
	}

}
