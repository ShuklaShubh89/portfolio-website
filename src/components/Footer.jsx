import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };


  React.useEffect(() => {
      const counter = document.querySelectorAll('#counter span');

      const setValue = (num) => {
        var str = num.toString().padStart(6, "0");
        for (let index = 0; index < str.length; index++) {
          const element = str[index];
          counter[index].innerHTML = element;
        }
      };
      
      var countvar=0
      
      const readPayload = {
          "operation": "list",
          "tableName": "countervisitor",
          "select": "COUNT",
          "payload": {
              "TableName": "countervisitor",
              "Select": "COUNT"    
            }
      }
      
      const readAction = async(flag) => {
        const response = await fetch('https://j9t296xsr2.execute-api.us-east-1.amazonaws.com/prod/ddmanager', {
          method: 'POST',
          body: JSON.stringify(readPayload),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const myJson = await response.json(); //extract JSON from the http response
        countvar = myJson.Count;
        if(flag==="new"){
          writeAction()
        }else {
          setValue(countvar)
        }
      }
      
      const writeAction = async() => {
        countvar+=1
        const response = await fetch('https://j9t296xsr2.execute-api.us-east-1.amazonaws.com/prod/ddmanager', {
          method: 'POST',
          body: JSON.stringify({
            "operation": "update",
            "tableName": "countervisitor",
            "payload": {
              "Key": {
                "count": countvar
              }
            }
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        await response.json();
        setValue(countvar)
      }
    
      if (localStorage.getItem("hasVisited") == null) {
      console.log('this is here')
      readAction("new")
        .then(() => {
          localStorage.setItem("hasVisited", "true");
        })
        .catch((err) => console.log(err));
    } else {
        readAction("reload")
    }
  });

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/shuklashubh89"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Shubham Shukla
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
        <div class="counter" id="counter">
		    <span>0</span>
		    <span>0</span>
		    <span>0</span>
		    <span>0</span>
		    <span>0</span>
		    <span>0</span>
	      </div>
	      <div class="message" id="msg">Unique Visits to this Page</div>
      </Container>
    </footer>
  );
};

export default Footer;
