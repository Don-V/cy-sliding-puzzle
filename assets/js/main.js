var squareLocation = []; //Square itself **Having trouble storing Squares in here.
var puzzle = []; //Values of what is on the square
var index = []; //Use this in updateSquare function. It would be better to use Square{sqNum} but squareLocation doesn't seem to be storing squares. Likely remove this later
var initial = 0; //Temperary variable to populate squares.
var moves; //Number of moves
var score; //Score. Will figure out how to do this later

class Square extends React.Component{
  
   constructor() {
    super();
    this.state = {
      value: initial++, //Populate the values
    };
      console.log("Puzzle: " + puzzle[puzzle.length-1]); //Always 9
      // squareLocation.push(this);
    }


  output(c){
    //Updates puzzle array
    var swap = function(a, b){
      moves++;
      let c =  puzzle[a];
      puzzle[a] = puzzle[b];
      puzzle[b] = c;
    }
    
    var updateSquare = function(index, num){
      let t = document.getElementsByClassName(`box-${index}`);
      t.setState({value: num});
    }
    
    console.log("C is : " + c  + " Puzzle is: " + puzzle[c]);
    //Check if 0 is bordering it
    if(puzzle[c]===0){
      console.log("Sqlocation value is: " + squareLocation[c].sqNum); //Why is this undefined??? SHouldn't it be 1?
      return 0;
    }
    
    if(c+3<8){
      if(puzzle[c+3] ===0){
       swap (c, c+3)
       updateSquare(c+3, puzzle[c]);
      console.log("up");
      console.log("C is : " + c  + " Puzzle is: " + puzzle[c]);
        return 0;
      }
    }
    if(c-3 >= 0){
       if(puzzle[c-3] === 0){
          console.log("down");
          swap(c, c-3);
          console.log("C is : " + c  + " Puzzle is: " + puzzle[c]);
          return 0;
       }
    }
    if(c!= 2 || c!= 5 || c!=8){
       if(puzzle[c+1] === 0){
         console.log("right");
          swap(c,c+1);
          console.log("C is : " + c  + " Puzzle is: " + puzzle[c]);
          return 0;
       }
    }
    if(c!==0 || c!= 3 || c!= 6){
       if(puzzle[c-1]===0){
       console.log("left");
       swap (c, c-1);
       console.log("C is : " + c  + " Puzzle is: " + puzzle[c]);
        return 0;
       }
    }
    console.log("else");
    return puzzle[c]; //Return itself
   }
  
  render(){
    return(
      <div className={this.props.customClass} onClick={() => this.setState({value: this.output(this.props.sqNum)})}>
        {this.state.value}
      </div>
    );
  }
}

class Board extends React.Component{
  renderSquare(i, classId){
    let customClassName = `square col-sm-4 box-${classId}`;
    let sq = <Square sqNum={i} customClass={customClassName}/>;
    squareLocation.push(sq);
    puzzle.push(i);
    index.push(i);
    return sq;
  }
  render(){
    return(
      <div>
        <h1> Cy Sliding Puzzle</h1>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0, 0)}
          {this.renderSquare(1, 1)}
          {this.renderSquare(2, 2)}
        </div>
        
        <div className="board-row">
          {this.renderSquare(3, 3)}
          {this.renderSquare(4, 4)}
          {this.renderSquare(5, 5)}
        </div>
        
        <div className="board-row">
          {this.renderSquare(6, 6)}
          {this.renderSquare(7, 7)}
          {this.renderSquare(8, 8)}
        </div>

      </div>
    );
  }
}


class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        <div className="numMoves">Moves: {moves}</div>
        <div className="numScore">Score: {score}</div>
        </div>

      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('react-container')
);