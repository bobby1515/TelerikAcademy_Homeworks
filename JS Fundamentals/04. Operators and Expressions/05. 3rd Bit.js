function FindThirdBit(number) {
    var position = 3,
        mask = 1 << position,
        nAndMask = number & mask,
        bit = nAndMask >> position;

    return console.log(bit);
}

//function FindThirdBit(number) {
 //   var position = 3;
  //  console.log((number >> position) & 1);
//}
FindThirdBit(['15']);//1