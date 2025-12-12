package commands

import (
	"github.com/KrakenTech-LLC/wails/v3/internal/templates"
)

func GenerateTemplate(options *templates.BaseTemplate) error {
	return templates.GenerateTemplate(options)
}
