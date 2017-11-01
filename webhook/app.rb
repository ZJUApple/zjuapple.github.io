require "sinatra"
require "json"

post "/" do
  payload = JSON.parse params["payload"]
  pusher = payload["pusher"]["name"]
  repo = payload["repository"]["name"]
  puts "[webhook] #{pusher} has just pushed to #{repo}"
  puts "[webhook] deployment done" if system("./deploy.sh")
end
