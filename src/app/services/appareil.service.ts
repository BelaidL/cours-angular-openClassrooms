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

  addAppareil(name: string, status: string) {
    const newAppareil = {
      id: 0,
      name: '',
      status: ''
    };

    newAppareil.name = name;
    newAppareil.status = status;
    newAppareil.id = this.appareils[this.appareils.length - 1].id + 1;
    this.appareils.push(newAppareil);
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
