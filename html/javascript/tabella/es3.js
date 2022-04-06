function tabella(){
  
    let count=1;
   
   
    document.write('<table class="x">')
        for(let i=0; i<10; i++){
            
            document.write("<tr>")
            
            for(let j=0; j<10; j++){
                document.write("<td>")
                document.write(count);
                document.write("<td>")
                count++
            }

            document.write("</tr>")
        }
    
        document.write("</table>")

}