package utils

import (
	"errors"
	"strconv"
	"strings"
	"time"
)

func parseDuration(durationStr string) (time.Duration, error) {

	timeAttr := string(durationStr[len(durationStr)-1])
	realTime := strings.Split(durationStr, timeAttr)

	if len(realTime) != 2 {
		return 0, errors.New("invalid parsing format")
	}

	var (
		n, _ = strconv.Atoi(realTime[0])
		dur  = time.Duration(n) * time.Second
	)

	switch timeAttr {
	case "m":
		dur *= 60
	case "h":
		dur *= 60 * 60
	case "d":
		dur *= 60 * 60 * 24
	case "y":
		dur *= 60 * 60 * 24 * 365
	}
	return dur, nil
}

func TimeGranularityConversion(times string) time.Duration {
	if dur, err := parseDuration(times); err != nil {
		panic("parser config time error!")
	} else {
		return dur
	}
}
