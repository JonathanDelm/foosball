import { Injectable } from '@angular/core';
import { MATCHES } from './mock-matches';
import { Match } from './match.model';

@Injectable({
    providedIn: 'root'
})
export class MatchDataService {
private _matches = MATCHES;
constructor() {}

get matches(): Match[] {
    return this._matches;
}

addNewMatch(match: Match) {
    this._matches.push(match);
}
}