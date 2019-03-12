curl "https://secret-wave-91189.herokuapp.com/tasks" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \

echo
