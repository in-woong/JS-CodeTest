var minDepth = function(root) {
    function funct(r){
        if(!r)
        return 0;
        if((!r.left&&r.right)||(r.left&&!r.right))
        return Math.max(1+funct(r.left),1+funct(r.right))
        return Math.min(1+funct(r.left),1+funct(r.right))
    }
    return funct(root)
};