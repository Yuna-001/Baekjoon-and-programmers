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
    
    // 전위순회
    let stack = [tree.root];
    
    while(stack.length){
        const {idx,left,right} = stack.pop();
        
        result[0].push(idx);
        if(right) stack.push(right);
        if(left) stack.push(left);
    }
    
    // 후위순회
    stack = [[tree.root,false]];
    
    while(stack.length){
        const [node,visited] = stack.pop();
        
        if(visited){
            result[1].push(node.idx);
        }else{
            stack.push([node,true])
            if(node.right) stack.push([node.right,false]);
            if(node.left) stack.push([node.left,false]);   
        }
    }
    
    return result;
}