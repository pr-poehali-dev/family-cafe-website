import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'menu', label: 'Меню', icon: 'ChefHat' },
    { id: 'about', label: 'О нас', icon: 'Heart' },
    { id: 'offers', label: 'Акции', icon: 'Sparkles' },
    { id: 'contacts', label: 'Контакты', icon: 'MapPin' }
  ];

  const menuCategories = [
    {
      title: 'Завтраки',
      items: [
        { name: 'Омлет с травами', description: 'Нежный омлет с домашней зеленью', price: '320₽' },
        { name: 'Блинчики с медом', description: 'Тонкие блинчики по семейному рецепту', price: '280₽' },
        { name: 'Сырники', description: 'Классические сырники со сметаной и джемом', price: '290₽' }
      ]
    },
    {
      title: 'Основные блюда',
      items: [
        { name: 'Борщ украинский', description: 'Наваристый борщ с мясом и сметаной', price: '420₽' },
        { name: 'Котлеты по-домашнему', description: 'Сочные котлеты с картофельным пюре', price: '450₽' },
        { name: 'Паста карбонара', description: 'Классическая паста с беконом и сыром', price: '380₽' }
      ]
    },
    {
      title: 'Десерты',
      items: [
        { name: 'Тирамису', description: 'Нежный десерт с маскарпоне и кофе', price: '350₽' },
        { name: 'Чизкейк', description: 'Домашний чизкейк с ягодным соусом', price: '320₽' },
        { name: 'Шарлотка', description: 'Яблочная шарлотка бабушкин рецепт', price: '250₽' }
      ]
    }
  ];

  const offers = [
    {
      title: 'Семейный завтрак',
      description: 'Завтрак для всей семьи со скидкой 20%',
      discount: '20%',
      validUntil: '31 декабря'
    },
    {
      title: 'Детское меню',
      description: 'Каждый четверг детское меню за полцены',
      discount: '50%',
      validUntil: 'Каждый четверг'
    },
    {
      title: 'День рождения',
      description: 'Именинникам десерт в подарок',
      discount: 'Бесплатно',
      validUntil: 'Весь год'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Семейное Кафе
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Где каждый день создаются новые семейные традиции
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" onClick={() => setActiveSection('menu')}>
                  <Icon name="ChefHat" className="mr-2" size={20} />
                  Посмотреть меню
                </Button>
                <Button variant="outline" size="lg" onClick={() => setActiveSection('about')}>
                  <Icon name="Heart" className="mr-2" size={20} />
                  О нас
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
                <CardHeader>
                  <Icon name="Heart" className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Семейная атмосфера</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Уютное место где встречаются поколения и создаются воспоминания</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-none">
                <CardHeader>
                  <Icon name="ChefHat" className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle>Домашняя кухня</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Рецепты передаются из поколения в поколение с любовью</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-none">
                <CardHeader>
                  <Icon name="Clock" className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Традиции</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Сохраняем лучшие семейные традиции и создаем новые</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'menu':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Наше меню</h2>
              <p className="text-xl text-muted-foreground">Блюда, приготовленные с любовью</p>
            </div>
            
            <div className="space-y-12">
              {menuCategories.map((category, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center py-4 border-b border-muted last:border-b-0">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-primary">{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">О нас</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Наше кафе - это место, где семейные традиции встречаются с современным комфортом
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Наша история</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Более 15 лет назад мы начали с маленького семейного кафе. Наша бабушка Анна передала нам свои рецепты, 
                  которые теперь радуют гостей каждый день. Мы верим, что еда должна объединять людей и создавать теплые воспоминания.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Сегодня наше кафе - это место, где встречаются семьи, друзья отмечают важные события, 
                  а дети получают свои первые кулинарные впечатления.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Наши принципы</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Heart" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Семейные ценности</h4>
                      <p className="text-sm text-muted-foreground">Каждый гость для нас - часть большой семьи</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Leaf" className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold">Натуральные продукты</h4>
                      <p className="text-sm text-muted-foreground">Только свежие и качественные ингредиенты</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Star" className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold">Традиции</h4>
                      <p className="text-sm text-muted-foreground">Сохраняем лучшие семейные рецепты</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'offers':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Акции и предложения</h2>
              <p className="text-xl text-muted-foreground">Специальные предложения для наших гостей</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {offers.map((offer, index) => (
                <Card key={index} className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{offer.title}</CardTitle>
                      <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
                        {offer.discount}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardDescription className="text-base mb-4">
                      {offer.description}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Calendar" size={16} />
                      <span>Действует до: {offer.validUntil}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'contacts':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-xl text-muted-foreground">Мы всегда рады видеть вас</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="h-5 w-5" />
                    Адрес и время работы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">ул. Семейная, 25</p>
                      <p className="text-sm text-muted-foreground">Москва, Россия</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold">Часы работы:</p>
                      <p className="text-sm text-muted-foreground">Пн-Вс: 8:00 - 22:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Телефон:</p>
                      <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="h-5 w-5" />
                    Связаться с нами
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email:</p>
                      <p className="text-sm text-muted-foreground">info@family-cafe.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="MessageCircle" className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold">Telegram:</p>
                      <p className="text-sm text-muted-foreground">@family_cafe</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Instagram" className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Instagram:</p>
                      <p className="text-sm text-muted-foreground">@family_cafe_moscow</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full">
                      <Icon name="Calendar" className="mr-2" size={16} />
                      Забронировать столик
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Семейное Кафе
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center gap-2"
                >
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </Button>
              ))}
            </div>
            
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => setActiveSection(item.id)}
                size="sm"
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Icon name={item.icon} size={14} />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-secondary text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Heart" className="h-6 w-6" />
              <span className="text-xl font-bold">Семейное Кафе</span>
            </div>
            <p className="text-white/80 mb-4">Где создаются семейные традиции</p>
            <div className="flex items-center justify-center gap-4">
              <Icon name="Phone" size={16} />
              <span>+7 (495) 123-45-67</span>
              <span>•</span>
              <Icon name="MapPin" size={16} />
              <span>ул. Семейная, 25</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;