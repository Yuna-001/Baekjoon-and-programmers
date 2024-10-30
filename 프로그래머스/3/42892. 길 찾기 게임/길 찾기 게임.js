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
    
    nodeinfo = nodeinfo.map(([x,y],idx) => ({x,y,idx: idx+1}));
    nodeinfo.sort((a,b)=>b.y-a.y);
    
    nodeinfo.forEach(({x,idx}) => {
        tree.push(idx,x);
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