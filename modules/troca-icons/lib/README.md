# Trocafone fonts

Visit https://github.com/trocafone/kb/wiki/Add-or-modify-icons-in-base-ui  for more information
# We have 2 versions of this font. 

**V1 should NOT be updated anymore and it should be replaced with the icons in V2**

## V2
All icons begin with the class "i-t-"
After that prefix there are 2 groups. There should not be icons without a group.
* outline
* fill

The font family it's call "trocafont"


## Add or modify icons in Base Ui

### Generate svg file to upload to fontello 
_This part will an UX task from now on_

- Go to the repo Base ui and open the .ai in /modules/troca-icons/lib. This route will change once UX beggins managing this file.
- Go to Abstract and open last version of the design with the vector icon
- In Illustrator go to artboard panel and duplicate an artboard, name it (this will be the name use later).
- Copy and paste the vector in the .ai file, in your artboard
- Remove all unnecesary layers. And all masks. Release Clipping mask with right button
- With cmd + Y make sure you only have your vector and nothing else unnecesary, if you see squares it's because there are more masks that need releasing
- remove shadows
- make it black
- right click and search for make compound path, maybe in each vector layer.
- Once you have your vector, and nothing else. Stretch it without loosing proportion to the size of the artboard until you reach a border. Biggest artboard should be 64px x 64px
- make sure the width and height of the vector it's ALWAYS in exact numbers and pair. 
BAD Example ---> width: 31,34px Height: 63,76.
GOOD example: width: 32px Height:64px
- Same for the position X and Y ---> ALWAYS in exact numbers and pair
- Adjust the artboard until all sides are reached. One of them must be 64px, Height or width.
- After this, right click on the vector, and try "Make pixel perfect" if it doesn't change much, use it. When you upload this in fontello.com it might look bad, it could be because it's not pixel perfect.
- save the file. Always update the repo with your new icon
- Go to file/export/export for screens
- in Range put the number of your artboard. Or unclick everything but yours
- Choose SVG
- Export

### Upload the exported file to Fontello
- Go to http://fontello.com/
- Look for the icon to import a config.json located in /modules/troca-icons/lib/v2
- Add the exported file by dragging it to it. A message of error might show up, if you see your icon looking Ok don't pay attention to it. If once you use it something looks wrong, it's because the shape and the exact position might not be ok, or the pixel perfect issue. _In this case, talk to UX to fix it._
- Download the zip file

### Overwritte files in Base Ui
- Overwritte the **Json, all the font files** in the repo. 
- From the file **trocafont.css** copy all the classes for the icons. **NOT** the font-face nor the [class^="i-t-"]:before, [class*=" i-t-"]:befo.....
- In the repo **BASE-UI** re build, with yarn build.
- To test this, there is a hack (we need to find a better way). Overwrite the dist file created in base-ui after the build. paste it in web repo folder src/node_modules/@tech-trocafone/base-ui/dist and then rebuild web.
- On the site put a class for your new icon, they will always be call "i-t-(outline|fill)YOUR_ARTBOARD_NAME" ....... example: i-t-outline-close
- If your test wen't well, you need to publish a new version of base-ui. If it didn't then go back to the .ai and try to maake it pixel perfect. 
- Create a new version https://github.com/trocafone/kb/wiki/Create-new-Version-of-Base-Ui
