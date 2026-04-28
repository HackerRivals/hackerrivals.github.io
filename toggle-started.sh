#!/bin/bash

# Event Started State Toggle Script
# This script toggles the HAS_EVENT_STARTED value in eventConfig.ts

EVENT_CONFIG_FILE="src/constants/eventConfig.ts"

case "$1" in
  "started")
    echo "Setting event started state to TRUE..."
    sed -i '' 's/export const HAS_EVENT_STARTED = false/export const HAS_EVENT_STARTED = true/' $EVENT_CONFIG_FILE
    echo "✅ Event is now started"
    echo "🔥 Shows: Live status, Vote for a Team button"
    ;;
  "not-started")
    echo "Setting event started state to FALSE..."
    sed -i '' 's/export const HAS_EVENT_STARTED = true/export const HAS_EVENT_STARTED = false/' $EVENT_CONFIG_FILE
    echo "✅ Event is now not started"
    echo "⏱️  Shows: Countdown, Registration buttons"
    ;;
  "status")
    if grep -q "export const HAS_EVENT_STARTED = true" $EVENT_CONFIG_FILE; then
      echo "🟢 Event Started state: TRUE"
      echo "🔥 Showing: Live status and voting button"
    else
      echo "🔴 Event Started state: FALSE"
      echo "⏱️  Showing: Countdown and registration buttons"
    fi
    ;;
  *)
    echo "🚀 Event Started State Manager"
    echo ""
    echo "Usage: ./toggle-started.sh [command]"
    echo ""
    echo "Commands:"
    echo "  started     - Set state to started (shows live status/voting, hides countdown/reg)"
    echo "  not-started - Set state to not-started (shows countdown/reg, hides live status/voting)"
    echo "  status      - Check current event started state"
    echo ""
    echo "Current state:"
    if grep -q "export const HAS_EVENT_STARTED = true" $EVENT_CONFIG_FILE; then
      echo "🟢 STARTED - Live status and voting are visible"
    else
      echo "🔴 NOT STARTED - Countdown and registrations are visible"
    fi
    echo ""
    echo "💡 You can also manually edit: $EVENT_CONFIG_FILE"
    echo "💡 Look for: export const HAS_EVENT_STARTED = true/false"
    ;;
esac
