
function counter(n) {
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
  }


  function repeat(array){
      let repeted_array = array;
      return repeted_array;
  }

  function convert_to_string(array){
      let result = array.map(el => el.toString());
      return result;
  }

  function bidimensional_array(n) {
      let x = new Array(n);
      for (let i = 0; i < n; i++) {
          x[i] = new Array(n).fill(0);
      }
      return x;
  }

  console.log(bidimensional_array(4));