import {
    distinct,
    switchMap,
    scan,
    map,
    filter,
    takeUntil
    // interval
  } from "rxjs/operators";
  import { interval } from "rxjs";
  import { combineEpics } from "redux-observable";
  
  const demoEpic = action$ =>
    action$.ofType("STARTDEMO").pipe(
      distinct(),
      switchMap(action => interval(30 * 1000)),
      scan((acc, x) => acc + 30 * 1000),
      map(value => {
        return {
          type: "DEMOCLOCK",
          payload: {
            time: value
          }
        };
      }),
      takeUntil(action$.ofType("STOPDEMO"))
    );
  
  export default combineEpics(
      demoEpic
  );
  