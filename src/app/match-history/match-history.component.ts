import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Match } from '../match.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit {
  MatchData: Match[] = [];
  dataSource: MatTableDataSource<Match>;
  displayedColumns: string[] = ['team1', 'score', 'team2', 'dateAdded'];

  constructor(private matchApi: ApiService) {
    this.matchApi.GetMatches().subscribe(data => {
      console.log(data);

      this.MatchData = data;
      this.dataSource = new MatTableDataSource<Match>(this.MatchData);

      setTimeout(() => {
        this.dataSource.sort = this.sort;
      }, 0);
    })    
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {    
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

}
