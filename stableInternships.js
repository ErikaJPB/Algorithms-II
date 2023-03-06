// O(n^2) time | O(n^2) space

function stableInternships(interns, teams) {
  // Write your code here.

  const n = interns.length;
  const internPrefs = interns.map((intern) => [...intern]);
  const teamPrefs = teams.map((team) => [...team]);

  const internsAssigned = Array(n).fill(-1);
  const teamsAssigned = Array(n).fill(false);

  while (true) {
    let intern;
    for (intern = 0; intern < n; intern++) {
      if (internsAssigned[intern] === -1) break;
    }

    if (intern === n) break;

    const team = internPrefs[intern].shift();

    if (!teamsAssigned[team]) {
      internsAssigned[intern] = team;
      teamsAssigned[team] = true;
    } else {
      const currIntern = internsAssigned.findIndex((i) => i === team);

      if (
        teamPrefs[team].indexOf(intern) < teamPrefs[team].indexOf(currIntern)
      ) {
        internsAssigned[currIntern] = -1;
        internsAssigned[intern] = team;
      }
    }
  }

  const matchings = [];
  for (let i = 0; i < n; i++) {
    matchings.push([i, internsAssigned[i]]);
  }

  return matchings;
}
