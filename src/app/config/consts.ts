import { NotifierOptions } from 'angular-notifier';

export const notifierOptions: NotifierOptions = {
    position: {
      horizontal: {
        position: 'right',
        distance: 12
      },
      vertical: {
        position: 'top',
        distance: 12,
        gap: 10
      }
    },
    theme: 'material',
    behaviour: {
      autoHide: 5000,
      onClick: false,
      onMouseover: 'pauseAutoHide',
      showDismissButton: true,
      stacking: 4
    },
    animations: {
      enabled: true,
      show: {
        preset: 'slide',
        speed: 300,
        easing: 'ease'
      },
      hide: {
        preset: 'slide',
        speed: 300,
        easing: 'ease',
        offset: 50
      },
      shift: {
        speed: 300,
        easing: 'ease'
      },
      overlap: 150
    }
  };

export const UFS = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'TO', label: 'Tocantins' }
  ];

export const OCCUPATIONS = [
    { value: 1, label: 'Empregado'},
    { value: 2, label: 'Empresário'},
    { value: 3, label: 'Servidor Público'},
    { value: 4, label: 'Aposentado'},
    { value: 5, label: 'Autônomo'},
    { value: 6, label: 'Desempregado'},
    { value: 7, label: 'Estudante'},
    { value: 8, label: 'Não Cadastrado'},
    { value: 9, label: 'Profissional liberal'},
  ];

export const GENDERS = [
    {value: 'M', label: 'Masculino'},
    {value: 'F', label: 'Feminino'}
];
