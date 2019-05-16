import React from 'react';
import { Helmet } from 'react-helmet';
import { /* Input, */ Table } from 'reactstrap';
import CustomNavbar from '../Navbar/Navbar';
import './Statistics.css';
import Footer from '../Footer/Footer';
import Error from '../Loading/Error/Error';

export class Statistics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: 2019,
    };
  }

  componentDidMount() {
    this.props.getStats(this.props.match.params.year);
  }

  onYearSelectHandler = e => {
    this.setState({
      year: e.currentTarget.value,
    });
    this.props.history.push(`/stats/${e.currentTarget.value}`);
    this.forceUpdate();
  };

  render() {
    const { stats, isFetching, error } = this.props;

    let driversChampionship;
    let teamsChampionship;
    /* let yearChange; */
    let years = [];

    let errorComponent = null;
    let driverCounter = 0;
    let teamCounter = 0;

    if (isFetching) {
      errorComponent = <Error error="Идёт загрузка..." />;
    } else if (error || !stats) {
      errorComponent = <Error error="Статистика пока недоступна." />;
    } else {
      for (let i = 2019; i >= 1950; i--) {
        let comp = (
          <option key={i} value={i}>
            {i}
          </option>
        );
        years.push(comp);
      }
      /* yearChange = (
        <Input
          type="select"
          name="selectYear"
          id="selectYear"
          className="select-year"
          onChange={this.onYearSelectHandler}
          value={this.state.year}
        >
          {years}
        </Input>
      ); */

      driversChampionship = stats.drivers
        .sort(
          (a, b) =>
            b.season[b.season.findIndex(season => season.year === stats.year)]
              .points -
            a.season[a.season.findIndex(season => season.year === stats.year)]
              .points
        )
        .map(driver => {
          driverCounter++;
          return (
            <tr key={driver._id}>
              <th scope="row">{driverCounter}</th>
              <td>
                {driver.name} {driver.surname}
              </td>
              <td>
                <img className="stats-car" src={driver.currentCar} alt="Car" />
              </td>
              <td>{driver.number}</td>
              <td>{driver.season[0].points}</td>
            </tr>
          );
        });

      teamsChampionship = stats.teams
        .sort(
          (a, b) =>
            b.season[b.season.findIndex(season => season.year === stats.year)]
              .points -
            a.season[a.season.findIndex(season => season.year === stats.year)]
              .points
        )
        .map(team => {
          teamCounter++;
          return (
            <tr key={team._id}>
              <th scope="row">{teamCounter}</th>
              <td />
              <td>{team.name}</td>
              <td>{team.season[0].points}</td>
            </tr>
          );
        });
    }

    return (
      <React.Fragment>
        <CustomNavbar active="Статистика" />
        <Helmet>
          <title>Статистика - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="row statistics">
          <div className="col-md-8 stats-table">
            <div className="stats-title">Чемпионат пилотов</div>
            {error || !stats || isFetching ? (
              errorComponent
            ) : (
              <Table striped>
                <thead className="table-title">
                  <tr>
                    <th>#</th>
                    <th>Имя</th>
                    <th />
                    <th>Номер</th>
                    <th>Кол-во очков</th>
                  </tr>
                </thead>
                <tbody>{driversChampionship}</tbody>
              </Table>
            )}
          </div>
          <div className="col-md-4 stats-table">
            <div className="stats-title">Чемпионат команд</div>
            {error || !stats || isFetching ? (
              errorComponent
            ) : (
              <Table striped>
                <thead className="table-title">
                  <tr>
                    <th>#</th>
                    <th />
                    <th>Команда</th>
                    <th>Кол-во очков</th>
                  </tr>
                </thead>
                <tbody>{teamsChampionship}</tbody>
              </Table>
            )}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
