import { FiPlusSquare } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

import { Container } from "./styles";

interface HeaderProps {
    onOpenAddFoodModal: () => void;
}

export function Header({ onOpenAddFoodModal }: HeaderProps) {
    return (
        <Container>
        <header>
          <img src={Logo} alt="GoRestaurant" />
          <nav>
            <div>
              <button
                type="button"
                onClick={onOpenAddFoodModal}
              >
                <div className="text">Novo Prato</div>
                <div className="icon">
                  <FiPlusSquare size={24} />
                </div>
              </button>
            </div>
          </nav>
        </header>
      </Container>
    );
}