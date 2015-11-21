# Shape Drawers description
  
`Shape object`. 
- Represents coordinates, colors of shape and all data to draw the shape.   
- This object also knows how to draw itself of DOM canwas.  
- Each object must implement `draw` method that gets DOM context and Draw modifier as parameters.

Helper objects:  
- Draw modifier. Has info about drawer state like zoom, x shift, y shift. Has functions to modify input coordinates.
  
  
  
_