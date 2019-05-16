import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import CustomNavbar from '../Navbar/Navbar';
import './Statistics.css';
import Footer from '../Footer/Footer';
import Error from '../Loading/Error/Error';

export class Statistics extends React.Component {
  componentDidMount() {
    this.props.getStats(this.props.match.params.year);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.year !== this.props.match.params.year) {
      this.props.getStats(nextProps.match.params.year);
    }
  }

  render() {
    const { stats, isFetching, error } = this.props;

    let buttonComponent;
    let driversChampionship;
    let teamsChampionship;

    let errorComponent = null;
    let driverCounter = 0;
    let teamCounter = 0;

    if (isFetching) {
      errorComponent = <Error error="Идёт загрузка..." />;
    } else if (error || !stats) {
      errorComponent = <Error error="Статистика пока недоступна." />;
    } else {
      buttonComponent = (
        <div className="select-year">
          {stats.year === 1950 ? null : (
            <div className="display-inline">
              <Button
                className="select-year-btn select-year-btn-prev"
                tag={Link}
                to={`/stats/${stats.year - 1}`}
              >
                ◀ {stats.year - 1}
              </Button>
            </div>
          )}
          {stats.year === 2019 ? null : (
            <div className="display-inline">
              <Button
                className="select-year-btn select-year-btn-next"
                tag={Link}
                to={`/stats/${stats.year + 1}`}
              >
                {stats.year + 1} ▶
              </Button>
            </div>
          )}
        </div>
      );

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
              <td>
                {
                  driver.season[
                    driver.season.findIndex(
                      season => season.year === stats.year
                    )
                  ].points
                }
              </td>
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
              <td>
                {
                  team.season[
                    team.season.findIndex(season => season.year === stats.year)
                  ].points
                }
              </td>
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
        {buttonComponent}
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
