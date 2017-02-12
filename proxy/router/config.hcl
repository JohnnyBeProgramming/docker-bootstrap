template {
  source = "./templates/routes.ctmpl"
  destination = "./config/routes.conf"
  command = "docker kill -s HUP proxy"
}