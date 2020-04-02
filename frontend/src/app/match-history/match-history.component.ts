import { Component, OnInit, ViewChild } from '@angular/core';
import { MATCHES } from '../mock-matches';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Match } from '../match.model';
import { MatchDataService } from '../match-data.service';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit {
  displayedColumns = ['team1', 'score', 'team2', 'dateAdded'];
  dataSource = new MatTableDataSource(this.matches);

  constructor(private _matchDataService: MatchDataService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    
    this.dataSource.filterPredicate = (match: Match, filter: string) => {
      const scoreString1 = match.scoreTeam1.toString() + ' - ' + match.scoreTeam2.toString();
      const scoreString2 = match.scoreTeam1.toString() + '-' + match.scoreTeam2.toString();
      const scoreString3 = match.scoreTeam2.toString() + ' - ' + match.scoreTeam1.toString();
      const scoreString4 = match.scoreTeam2.toString() + '-' + match.scoreTeam1.toString();
      return match.player1Team1.toLowerCase().includes(filter.toLowerCase()) ||
        match.player2Team1.toLowerCase().includes(filter.toLowerCase()) || 
        match.player1Team2.toLowerCase().includes(filter.toLowerCase()) ||
        match.player2Team2.toLowerCase().includes(filter.toLowerCase()) ||
        scoreString1.includes(filter.toLowerCase()) || scoreString2.includes(filter.toLowerCase()) ||
        scoreString3.includes(filter.toLowerCase()) || scoreString4.includes(filter.toLowerCase());
    };
  }

  applyPlayerFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyScoreFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get matches(): Match[] {
    return this._matchDataService.matches;
  }

}
