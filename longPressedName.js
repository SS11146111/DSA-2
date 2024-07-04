var isLongPressedName = function(name, typed) {
    let n = name.length;
    let t = typed.length;
    let i,j;

    if (t < n) 
    {
        return false;
    }

    for(i=0,j=0; i <= n && j < t; )
    {
        if(i < n && name[i] == typed[j])
        {
            i++;
            j++;
        }
        else if (i > 0 && name[i - 1] == typed[j])
        {
            j++;
        }
        else 
        {
            break;
        }
    }
        
    if(i == n && j == t)
        return true
     else
        return false
};

const result = isLongPressedName("alex", "aaleex");
console.log(result)