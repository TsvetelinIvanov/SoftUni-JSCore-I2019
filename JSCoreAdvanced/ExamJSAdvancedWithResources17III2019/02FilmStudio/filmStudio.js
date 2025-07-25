class FilmStudio {
    constructor(studioName) {
        this.name = studioName;
        this.films = [];
    }

    casting(actor, role) {
        let isTheActorUnemployed = true;
        let output;
        if (this.films.length) {
            for (let f of this.films) {
                let roles = f.filmRoles.filter((r) => r.role === role);
                if (roles.length) {
                    let filmIndex = this.films.indexOf(f);
                    let wantedRole = this.films[filmIndex].filmRoles.filter((fr) => fr.role === role)[0];
                    let roleIndex = this.films[filmIndex].filmRoles.indexOf(wantedRole);
                    this.films[filmIndex].filmRoles[roleIndex].actor = actor;
                    isTheActorUnemployed = false;
                    output = `You got the job! Mr. ${actor} you are next ${role} in the ${f.filmName}. Congratz!`;
                    break;
                }
            }

            if (isTheActorUnemployed) {
                output = `${actor}, we cannot find a ${role} role...`;
            }
        }
        else {
            output = `There are no films yet in ${this.name}.`;
        }

        return output;
    }

    makeMovie(filmName, roles) {
        if (arguments.length === 2) {
            let isFirstArgString = typeof arguments[0] === 'string';
            let isSecondArgArray = arguments[1] instanceof Array;

            if (isFirstArgString && isSecondArgArray) {
                let foundFilms = this.films.filter((f) => f.filmName.includes(filmName));
                let filmRoles = roles.reduce((acc, cur) => {
                    let curFilmRole = {
                        role: cur,
                        actor: false
                    };
                    acc.push(curFilmRole);
                    
                    return acc;
                }, []);

                let film = {
                    filmName,
                    filmRoles
                };

                if (foundFilms.length > 0) {
                    film.filmName += ` ${++foundFilms.length}`;
                }

                this.films.push(film);
                
                return film;
            }
            else {
                throw ('Invalid arguments')
            }

        }
        else {
            throw ('Invalid arguments count')
        }
    }

    lookForProducer(film) {
        let f = this.films.filter((f) => f.filmName === film)[0];
        let output;
        if (f) {
            output = `Film name: ${f.filmName}\n`;
            output += 'Cast:\n';
            Object.keys(f.filmRoles).forEach((role) => {
                output += `${f.filmRoles[role].actor} as ${f.filmRoles[role].role}\n`;
            });
        }
        else {
            throw new Error(`${film} has not exist yet, but we need the money...`)
        }

        return output;
    }
}
