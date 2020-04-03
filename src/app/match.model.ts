interface MatchJson {
    player1Team1: string;
    player2Team1: string;
    player1Team2: string;
    player2Team2: string;
    scoreTeam1: number;
    scoreTeam2: number;
    dateAdded: string;
}

export class Match {
    constructor(
        private _player1Team1: string,
        private _player2Team1: string,
        private _player1Team2: string,
        private _player2Team2: string,
        private _scoreTeam1: number,
        private _scoreTeam2: number,
        private _dateAdded: Date
    ) {}
    
    static fromJSON(json: MatchJson): Match {
        const match = new Match(json.player1Team1, json.player2Team1, json.player1Team2, json.player2Team2, json.scoreTeam1, json.scoreTeam2, new Date(json.dateAdded));
        return match;
    }

    // Getters for match history prints
    public get team1Html(): string {
        if (this.player2Team1 === '') {
            return this.player1Team1;
        } else {
            return this.player1Team1 + '\n\n' + this.player2Team1;
        }
    }

    public get team2Html(): string {
        if (this.player2Team2 === '') {
            return this.player1Team2;
        } else {
            return this.player1Team2 + '\n\n' + this.player2Team2;
        }
    }

    // Standard getters
    public get player1Team1() : string {
        return this._player1Team1;
    }
    
    public get player2Team1() : string {
        return this._player2Team1;
    }

    public get player1Team2() : string {
        return this._player1Team2;
    }

    public get player2Team2() : string {
        return this._player2Team2;
    }

    public get scoreTeam1() : number {
        return this._scoreTeam1;
    }

    public get scoreTeam2() : number {
        return this._scoreTeam2;
    }

    public get dateAdded() : Date {
        return this._dateAdded;
    }
    
}