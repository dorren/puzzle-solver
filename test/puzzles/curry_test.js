import test from 'ava';

// sum(1,5) => 1 + 2 + 3 + 4
function sum(a, b, acc=0){
  if(a == b){
    return acc;
  }else {
    acc += a;
    return sum(a+1, b, acc);
  }
}

// sum(1,5) => 1*1 + 2*2 + 3*3 + 4*4, 30
function sum_square(a, b, acc=0){
  if(a == b){
    return acc;
  }else {
    acc += a*a;
    return sum_square(a+1, b, acc);
  }
}

function sum_any(fn){
  return function(a, b, acc = 0){
    if(a == b){
      return acc;
    }else {
      acc += fn(a);
      return sum_any(fn)(a+1, b, acc);
    }
  }
}

test("sum()", t=>{
  t.is(sum(1,5), 10);
});

test("sum_square()", t=>{
  t.is(sum_square(1,5), 30);
});

test("sum_any()", t=>{
  t.is(sum_any(x => x)(1,5), 10);
  t.is(sum_any(x => x*x)(1,5), 30);
});
