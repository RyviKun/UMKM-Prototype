const comments = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 111,
            commentContent: 'Haai juga hai jugaa'
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 121,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      }
    ]
  },
  {
    commentId: 2,
    commentContent: 'Halooo'
  }
];


//menghitung total comment secara rekursif dengan memanggil fungsi sendiri, 
function countComments(comments){
    let total = 0;
    comments.forEach(
        item => {
                total += 1;
                //jika didalam comment tersebut mempunyai replies, maka fungsu countComments akan dipanggil lagi
                if (item.replies){
                  //menambahkan total yang dihitung dari fungsi tersebut
                    total += countComments(item.replies);
            }
        })
    return total;
}

console.log("total comments : "  + countComments(comments))
