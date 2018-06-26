export class AppareilService {
  appareils = [
    {
      id: 1,
      name: 'machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'four',
      status: 'éteint'
    },
    {
      id: 3,
      name: 'auto cuiseur',
      status: 'allumé'
    },
  ];

  getAppareilById(id: number) {
    return this.appareils.find(
      (a) => {
        return a.id === id;
      }
    );
  }

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
  }
}
