template {
  source = "./templates/routes.ctmpl"
  destination = "./generated/routes.conf"
  command = "docker kill -s HUP proxy"
}