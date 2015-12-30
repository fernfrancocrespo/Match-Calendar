## Version 1.1

- *General*
    - New styling of all pages
    - Can now configure/filter blocked hosts
    - Faster startup
    - New page to show all post details by clicking the game title
    - Hovering over the clock now shows the time offset from the server

- *Post list*
    - New enter/exit animation
    - Shows unparsed posts in a dropdown if there is any
    - Clicking on the post title takes you to the post page instead of the Reddit post
    - Added new filter to choose to show blocked hosts
    - Fixed querying Reddit twice on initial load
    - Removed the server IP address and moved it to the post page
    - Allow dismissing of the notifications notification
    - gamemode/team type filters show up alphabetically
    - Clicking on a post no longer collapses to show the markdown

- *Generator*
    - Now disallows the use of the default template
    - Better feedback when adding/removing extras/scenarios

- *Template Editor*
    - New default template based on Helio
    - Now disallows editing of the default template, default template can be copied as a base for new templates
    - Default template can now be updated with future udpates

- *Settings*
    - New settings for managing blocked/favourite hosts
    - New slider for notifications
    - Can turn on notifications on settings page now

- *Misc*
    - Changed formatting of notification times (xx:xx:xx => xh xm)
    - Added list of bundled front end libraries to the about page
    - RIP Pen Font
    - Better sync to the server for clock time
    - New build system fixes some iPads not working
    - Some rare initial load bugs fixed