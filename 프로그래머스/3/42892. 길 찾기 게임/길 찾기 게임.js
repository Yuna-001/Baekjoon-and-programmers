class Node{
    constructor(idx,x){
        this.idx = idx;
        this.x = x;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
    
    push(idx,x){
        const node = new Node(idx,x);
        
        if(this.root === null){
            this.root = node;
        }else{
            let current = this.root;
            
            while(true){
                if(x < current.x){
                    if(current.left){
                        current = current.left;
                    }else {
                        current.left = node;
                        break;
                    }
                }else{
                    if(current.right){
                        current = current.right;
                    }else {
                        current.right = node;
                        break;
                    }
                }
            }
        }
    }
}

function solution(nodeinfo) {
    const result = [[],[]];
    const tree = new Tree();
    
    const idxArr = nodeinfo.map((_,idx) => idx+1);
    idxArr.sort((a,b)=> nodeinfo[b-1][1] - nodeinfo[a-1][1] || nodeinfo[a-1][0] - nodeinfo[b-1][0]);
    
    idxArr.forEach(idx => {
        tree.push(idx,nodeinfo[idx-1][0]);
    })
    
    function preOrder(node){
        result[0].push(node.idx);
        if(node.left) preOrder(node.left);
        if(node.right) preOrder(node.right);
    }

    preOrder(tree.root);
    
    function postOrder(node){
        if(node.left) postOrder(node.left);
        if(node.right) postOrder(node.right);
        result[1].push(node.idx);
    }
    
    postOrder(tree.root);
    
    return result
}