let nextShapeId=1;
let nextPointId=1;

export const addShape = () =>({
  type: 'ADD_SHAPE',
  id: nextShapeId++
});

export const removeShape = (currShape)=>({
  type: 'REMOVE_SHAPE',
  currShape
});

export const swapShape = (currShape)=>({
  type: 'SWAP_SHAPE',
  currShape
})

export const addPoint = ()=>({
  type: 'ADD_POINT',
  id: nextPointId++
});

export const removePoint=()=>({
  type: 'REMOVE_POINT',
});
