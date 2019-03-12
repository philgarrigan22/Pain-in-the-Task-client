curl "https://secret-wave-91189.herokuapp.com/tasks/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "task": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESCRIPTION}"'",
      "target_date": "'"${DATE}"'"
    }
  }'

echo
