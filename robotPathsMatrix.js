/*  Problem:  Robot Paths
 *
 *  Prompt:   Given a matrix of zeroes, determine how many unique paths exist
 *            from the top left corner to the bottom right corner
 *
 *  Input:    An Array of Array of Integers (matrix)
 *  Output:   Integer
 *
 *  Example:  matrix = [[0,0,0,0],
 *                      [0,0,0,0],
 *                      [0,0,0,0]]
 *
 *            robotPaths(matrix) = 38
 *
 *
 *            matrix = [[0,0,0],
 *                      [0,0,0]]
 *
 *            robotPaths(matrix) = 4
 *
 *  Note:     From any point, you can travel in the four cardinal directions
 *            (north, south, east, west). A path is valid as long as it travels
 *            from the top left corner to the bottom right corner, does not go
 *            off of the matrix, and does not travel back on itself
 */

function robotPaths(matrix) {
  let tRows = matrix.length;
  if (tRows === 0) { return 0; }
  let tCols = matrix[0].length;

  function traverse(row, col) {
    //Base Cases
    //1. Out of Bounds
    if (row < 0 || col < 0 || row >= tRows || col >= tCols) {
      return 0;
    }

    //2. Already Visited
    if (matrix[row][col] === 1) {
      return 0;
    }

    //3. Target Reached
    if (row === (tRows - 1) && col === (tCols - 1)) {
      return 1;
    }

    //Set Node to Visited: 0->1
    matrix[row][col] = 1;

    //Create sum variable that adds all of the traversals
    let sum = 0;

    //Recursive Calls - Traverse through Matrix: Up, Down, Right, Left
    sum += traverse(row - 1, col); //Up
    sum += traverse(row + 1, col); //Down
    sum += traverse(row, col + 1); //Right
    sum += traverse(row, col - 1); //Left

    //Set Node to unVisited: 1->0
    matrix[row][col] = 0;

    //Return Sum
    return sum;
  }


  return traverse(0, 0);
}

robotPaths([[0,0,0], [0,0,0]])
