class Node{
    constructor(x,idx){
        this.x = x;
        this.idx = idx;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
    
    push(x,idx){
        const node = new Node(x,idx);
        
        if(this.root === null){
            this.root = node;
            return;
        }
        
        let current = this.root;
        
        while(true){
            if(x<current.x){
                if(current.left === null){
                    current.left = node;
                    break;
                }
                current = current.left;
            }else{
                if(current.right === null){
                    current.right = node;
                    break;
                }
                current = current.right;
            }
        }
        
    }
}

function solution(nodeinfo) {
    const result = [[],[]];
    
    const arr = nodeinfo.map(([x,y],i)=>({x,y,idx:i+1}));
    
    arr.sort((a,b)=>b.y-a.y);
    
    const tree = new Tree();
    
    for(const {x,idx} of arr){
        tree.push(x,idx);
    }
    
    // 전위 순회
    function preorder(node){
        result[0].push(node.idx);
        if(node.left) preorder(node.left);
        if(node.right) preorder(node.right);
    }
    
    // 후위 순회
    function postorder(node){
        if(node.left) postorder(node.left);
        if(node.right) postorder(node.right);
        result[1].push(node.idx);
    }
    
    preorder(tree.root);
    postorder(tree.root)
    
    return result;
}