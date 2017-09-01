// http://www.geeksforgeeks.org/heap-sort/
var HeapSort = {
  /**
   * heapify a section of array
   *
   * @param arr, arr to be modified.
   * @param len, length of arr to operate on, not always arr.length.
   @ @param i, index of the node to start
   */
  heapify: function(arr, len, i){
    let max = i;         // top node index.
    let l = 2*i + 1;     // left node index
    let r = 2*i + 2;     // right

    if(l < len && arr[l] > arr[max]){
      max = l;           // swap left child with top
    }
    if(r < len && arr[r] > arr[max]){
      max = r;           // swap right child with top
    }

    if(max != i) {       // node index changed.
      let temp = arr[i]; // swap top and i's value, i is original top
      arr[i] = arr[max];
      arr[max] = temp;

      this.heapify(arr, len, max); // recursively heapify sub tree.
    }
  },

  buildHeap: function(arr){
    let len = arr.length;
    for(let i = Math.floor(len / 2) - 1; i >=0; i--){
      this.heapify(arr, len, i);
    }

    return arr;
  },

  sort: function(arr){
    this.buildHeap(arr);

    let n = arr.length;
    // start from the end, place largest node at the end.
    for(let i =n-1; i>=0; i--){
      let temp = arr[0];  // swap first and last.
      arr[0] = arr[i];
      arr[i] = temp;

      this.heapify(arr, i, 0);
    }
  }
}

export default HeapSort;
