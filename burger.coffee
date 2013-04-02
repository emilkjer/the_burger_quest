# Description:
#   Give, Take and List Burger Points
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   hubot +<number> burger points to <username> - award <number> burger points to <username>
#   hubot -<number> burger points from <username> - take away <number> burger points from <username>
#   hubot how many burger points does <username> have? - list how many points <username> has
#
# Author:
#   brettlangdon, seankozer
#

points = {}

award_points = (msg, username, pts) ->
    points[username] ?= 0
    points[username] += parseInt(pts)
    msg.send pts + ' Awarded To ' + username

save = (robot) ->
    robot.brain.data.points = points

module.exports = (robot) ->
    robot.brain.on 'loaded', ->
        points = robot.brain.data.points

    robot.respond /\+(\d+) burger points to (.*?)\s?$/i, (msg) ->
        award_points(msg, msg.match[2], msg.match[1])
        save(robot)

    robot.respond /\-(\d+) burger points from (.*?)\s?$/i, (msg) ->
         pts = msg.match[1]
         username = msg.match[2]
         points[username] ?= 0
         
         if points[username] is 0
             msg.send username + ' Does Not Have Any Burger Points To Take Away'
         else
             points[username] -= parseInt(pts)
             msg.send pts + ' Points Taken Away From ' + username

         save(robot)

    robot.respond /how many burger points does (.*?) have\??/i, (msg) ->
        username = msg.match[1]
        points[username] ?= 0

        msg.send username + ' Has ' + points[username] + ' Points'
       
