var removeNthFromEnd = function(head, n) {
    let temp = head;
    let root= head;
    let len= 1;
    while(temp.next){
        len++;
        temp=temp.next
    }
    
    let count = len-n;
    if(count==0){
        return root.next
    }
    while(root.next &&count>1){
        root=root.next;
        count--
          }
    root.next= root.next&&root.next.next;
    console.log(head)
    
    return head
};