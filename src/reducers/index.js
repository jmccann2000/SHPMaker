

export let shapes = (state=[], action) =>{
  switch(action.type) {
    case 'ADD_SHAPE':
      let shapeId = "Shape" + action.id;
      return state.concat([shapeId])
      break;

    case 'REMOVE_SHAPE':
      let list = state
      shapeId = action.currShape;
      let index = list.indexOf(shapeId);
      if (index > -1) {
        return list.splice(index, 1);
      }else{
        return list;
      }
      break;

    case 'SWAP_SHAPE_UP':
      list = state;
      shapeId = action.currShape;
      index= list.indexOf(id);
      let temp = list[index];
      if(up && index != 0){
        list[index] = list[index-1];
        list[index-1] = temp;
      }else if (!up && index != list.length-1) {
        list[index] = list[index+1];
        list[index+1]=temp;
      }

      return list
      break;

    case 'SWAP_SHAPE_DOWN':
      

    default:
      return state;
  }
}
