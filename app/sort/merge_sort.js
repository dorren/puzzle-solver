// http://www.geeksforgeeks.org/merge-sort/
var MergeSort = {
  logging: true,

  log: function(...items){
    if(this.logging)
      console.log(...items);
  },

  merge: function(arr, l, m, r){
    this.log("M  ", arr.slice(l, r+1));
    let a = arr.slice(l, m+1);     // left array
    let b = arr.slice(m+1, r+1);   // right

    let n1 = m+1 - l;   // left  length
    let n2 = r - m;     // right length
    let i=0, j=0;
    let k = l;          // iterator index on original array

    while(i < n1 && j < n2){
      if(a[i] < b[j]){
        arr[k] = a[i++];
      }else{
        arr[k] = b[j++];
      }
      k++;
    }

    while(i < n1){
      arr[k] = a[i++];
      k++;
    }

    while(j < n2){
      arr[k] = b[j++];
      k++;
    }
    this.log("M. ", arr.slice(l, r+1));
  },

  split: function(arr, l, r){
    if(l == r) { return; }
    this.log("S ", arr.slice(l, r+1));

    let m = Math.floor((l + r)/2);
    this.split(arr, l, m);
    this.split(arr, m+1, r);

    this.merge(arr, l, m, r);
  },

  run: function(arr){
    this.log("-".repeat(30));
    this.split(arr, 0, arr.length-1);
  }
};

export default MergeSort;
