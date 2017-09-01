class LinkedList {
  constructor(val){
    this.value = val;
    this.next = null;
  }

  static build(arr){
    let root = new this(arr.shift());

    let current = root;
    while(arr.length > 0){
      current.next = new this(arr.shift());
      current = current.next;
    }

    return root;
  }

  // end node
  end() {
    let node = this;
    while(node.next){
      node = node.next;
    }
    return node;
  }

  reverse() {
    let head = this;
    let tail = this.next;
    head.next = null;

    if(tail == null){
      return head;
    }else{
      tail = tail.reverse();
      tail.end().next = head;
      return tail;
    }
  }

  toArray(){
    let arr = [];

    let node = this;
    while(node != null){
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }

  /**
   * remove duplicate element from sorted list.
   */
  removeDup(prev=null) {
    if (prev != null && prev.value == this.value){
      prev.next = this.next;
      this.next.removeDup(prev);
    }else if(this.next){
      this.next.removeDup(this);
    }
  }
}

export default LinkedList;
