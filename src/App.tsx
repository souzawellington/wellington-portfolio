import { useState } from 'react';
import {
  ArrowRight,
  Check,
  X,
  MessageCircle,
  Bot,
  Globe,
  Send,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface FormData {
  name: string;
  whatsapp: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    whatsapp: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleSubmit = async () => {
    if (!formData.name || !formData.whatsapp || !formData.email) return;
    setFormStatus('loading');

    try {
      // PRODUÇÃO: substituir 261571572991062 pelo ID real do Formspree (formspree.io)
      const res = await fetch('https://formspree.io/f/261571572991062', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  // TROCAR PELO SEU NÚMERO REAL (formato: 55 + DDD + número, sem espaços ou símbolos)
  const whatsappLink = `https://wa.me/5541985000404?text=${encodeURIComponent(
    'Oi Wellington, vi seu site e quero conversar sobre minha clínica.'
  )}`;

  const servicos = [
    {
      icon: Globe,
      destaque: false,
      title: 'Site Profissional',
      tagline: 'Vitrine online pra clínica ou consultório',
      features: [
        'Design adaptado à sua especialidade',
        'Otimizado pra celular (75% dos acessos)',
        'SEO local pra aparecer na sua região',
        'Páginas de serviços, equipe e contato'
      ],
      price: 'A partir de R$ 2.500',
      detail: 'Entrega em 15 dias'
    },
    {
      icon: Sparkles,
      destaque: true,
      title: 'Presença Digital Completa',
      tagline: 'Pacote completo pra dentistas',
      features: [
        'Site profissional otimizado pra busca local',
        'Agendamento online integrado à sua agenda',
        'Assistente no WhatsApp que responde 24h',
        'Configuração do Google Meu Negócio',
        'Acompanhamento mensal opcional'
      ],
      price: 'A partir de R$ 3.500',
      detail: '+ R$ 400/mês opcional · 20 dias'
    },
    {
      icon: Bot,
      destaque: false,
      title: 'Assistente WhatsApp',
      tagline: 'Atendimento automático que não parece robô',
      features: [
        'Responde dúvidas comuns 24h por dia',
        'Encaminha só contato qualificado pra você',
        'Integra com Google Agenda',
        'Treinado com o tom da sua clínica'
      ],
      price: 'A partir de R$ 1.500',
      detail: '+ R$ 200/mês · 7 dias'
    }
  ];

  const passos = [
    {
      num: '01',
      title: 'Conversa inicial · 30 min, sem custo',
      desc: 'Conversamos pelo WhatsApp ou videochamada. Você me conta sobre sua clínica e o que tá te incomodando. Eu te digo se posso ajudar ou se você precisa de outra coisa. Sem proposta sob pressão.'
    },
    {
      num: '02',
      title: 'Proposta clara',
      desc: 'Em até 2 dias úteis, envio uma proposta com escopo, prazo e preço fechado. Sem letra miúda, sem custo escondido.'
    },
    {
      num: '03',
      title: 'Execução em 20 dias',
      desc: 'Sigo um cronograma transparente. Você acompanha o progresso, valida cada etapa e me passa feedback. Sem surpresa na entrega.'
    },
    {
      num: '04',
      title: 'Entrega + 30 dias de ajustes',
      desc: 'Te treino pra usar o que entreguei. Por 30 dias depois da entrega, qualquer ajuste pequeno tá incluso. Se decidir continuar com a manutenção mensal, a gente segue junto.'
    }
  ];

  const casos = [
    {
      title: 'Run Your Trip',
      tag: 'Projeto pessoal',
      desc: 'Plataforma SaaS completa construída do zero: Google Cloud Run, Cloud SQL, autenticação Google, integração com Vertex AI (Claude e Gemini), sistema de assinaturas e área de membros. Esse foi o projeto que me ensinou na prática a diferença entre o que parece sofisticado e o que realmente serve ao usuário final.',
      tech: ['Node.js', 'Vue 3', 'Google Cloud', 'Vertex AI', 'Cloud SQL'],
      link: 'https://www.runyourtrip.com.br',
      gradient: 'from-amber-500/30 via-orange-500/15 to-transparent'
    },
    {
      title: 'M7 Soluções Imobiliárias',
      tag: 'Landing de captura',
      desc: 'Hero com formulário de captura para imobiliária de alto padrão em Curitiba. Estética industrial com referência em sistemas como Vercel e Linear, backend próprio para qualificação de leads, conformidade com LGPD.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Cloud SQL'],
      link: undefined as string | undefined,
      gradient: 'from-blue-500/25 via-cyan-500/15 to-transparent'
    },
    {
      title: 'Pianeta Boy',
      tag: 'SaaS internacional',
      desc: 'Diretório premium operando no mercado italiano, com cadastro completo de perfis, aprovação administrativa, assinaturas em euro via Stripe, e-mails transacionais em italiano e painel admin completo.',
      tech: ['React', 'Vite', 'Supabase', 'Stripe', 'Resend'],
      link: 'https://pianetaboy.com',
      gradient: 'from-purple-500/25 via-pink-500/15 to-transparent'
    },
    {
      title: 'Clínica Aurora',
      tag: 'Projeto demonstrativo',
      desc: 'Demonstração do pacote Presença Digital Completa: site profissional pra clínica odontológica fictícia, com agendamento online, assistente WhatsApp e SEO local configurado. Construído pra mostrar como o pacote funciona na prática.',
      tech: ['React', 'TypeScript', 'Vertex AI', 'Google Calendar API'],
      link: undefined as string | undefined,
      gradient: 'from-teal-500/25 via-emerald-500/15 to-transparent'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">
            Wellington <span className="text-amber-400">Souza</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#servicos" className="hover:text-zinc-100 transition">Serviços</a>
            <a href="#processo" className="hover:text-zinc-100 transition">Processo</a>
            <a href="#casos" className="hover:text-zinc-100 transition">Casos</a>
            <a href="#sobre" className="hover:text-zinc-100 transition">Sobre</a>
            <a href="#contato" className="hover:text-zinc-100 transition">Contato</a>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-lg text-sm font-medium transition"
          >
            Conversar
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 px-6">
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,_rgb(39_39_42)_1px,_transparent_1px),linear-gradient(to_bottom,_rgb(39_39_42)_1px,_transparent_1px)] bg-[length:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,_black_70%,_transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,_black_70%,_transparent_100%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8 text-xs text-zinc-400 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Desenvolvedor solo · Curitiba, PR</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
            Mais pacientes pra sua clínica,
            <br />
            <span className="text-zinc-400">sem você virar especialista em marketing.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Crio sites profissionais, agendamento online e atendimento automático no WhatsApp pra
            dentistas que querem parar de depender só de indicação. Em 20 dias.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-lg font-medium transition"
            >
              <MessageCircle className="w-4 h-4" />
              Conversar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 rounded-lg font-medium transition text-zinc-200"
            >
              Ver pacotes
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-24 px-6 border-t border-zinc-900">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
                É pra você
              </div>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-zinc-100">
                Esse trabalho é pra você se:
              </h2>
              <ul className="space-y-4">
                {[
                  'Tem clínica ou consultório próprio e vive da sua agenda',
                  'Sente que perde paciente por demorar pra responder no WhatsApp',
                  'Quer crescer sem virar refém de indicação ou de tráfego pago'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                Não é pra você
              </div>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-zinc-400">
                Não é pra você se:
              </h2>
              <ul className="space-y-4">
                {[
                  'Procura o orçamento mais barato do mercado',
                  'Quer site "só pra ter" sem objetivo de gerar consulta',
                  'Espera resultado em uma semana'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-zinc-500">
                    <X className="w-5 h-5 text-zinc-700 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 px-6 border-t border-zinc-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
              Serviços
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Três pacotes. <span className="text-zinc-400">Preços claros.</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Escolha o que faz sentido pro momento da sua clínica. Sem surpresa, sem letra miúda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {servicos.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className={`rounded-2xl p-8 flex flex-col relative ${
                    s.destaque
                      ? 'border-2 border-amber-400/40 bg-gradient-to-b from-amber-400/5 to-transparent'
                      : 'border border-zinc-800 bg-zinc-900/30'
                  }`}
                >
                  {s.destaque && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-400 text-zinc-950 text-xs font-medium rounded-full">
                      Mais escolhido
                    </div>
                  )}
                  <Icon className={`w-8 h-8 mb-6 ${s.destaque ? 'text-amber-400' : 'text-zinc-400'}`} />
                  <h3 className="text-xl font-medium mb-2">{s.title}</h3>
                  <p className="text-sm text-zinc-400 mb-6">{s.tagline}</p>
                  <ul className="space-y-3 text-sm text-zinc-300 mb-8 flex-1">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex gap-2.5">
                        <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`border-t pt-6 mb-6 ${s.destaque ? 'border-amber-400/20' : 'border-zinc-800'}`}>
                    <div className="text-2xl font-medium">{s.price}</div>
                    <div className="text-sm text-zinc-500">{s.detail}</div>
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-center px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                      s.destaque
                        ? 'bg-amber-400 hover:bg-amber-300 text-zinc-950'
                        : 'border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50'
                    }`}
                  >
                    Quero esse
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="py-24 px-6 border-t border-zinc-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
              Processo
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Como funciona</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Sem mistério. Quatro etapas claras, do primeiro contato à entrega.
            </p>
          </div>

          <div className="space-y-2">
            {passos.map((step, i) => (
              <div
                key={i}
                className="group flex gap-6 md:gap-10 p-6 md:p-8 rounded-2xl hover:bg-zinc-900/30 transition"
              >
                <div className="text-2xl md:text-3xl font-mono text-zinc-700 group-hover:text-amber-400 transition flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos */}
      <section id="casos" className="py-24 px-6 border-t border-zinc-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
              Casos
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Trabalhos recentes
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Projetos próprios e de clientes que mostram como aplico tecnologia em escala humana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {casos.map((caso, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden hover:border-zinc-700 transition"
              >
                <div className={`aspect-[16/9] bg-gradient-to-br ${caso.gradient} relative overflow-hidden`}>
                  <div
                    className="absolute inset-0 grid-pattern"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-3xl md:text-4xl font-medium tracking-tight text-white/30 text-center">
                      {caso.title}
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
                        {caso.tag}
                      </div>
                      <h3 className="text-xl md:text-2xl font-medium">{caso.title}</h3>
                    </div>
                    {caso.link && (
                      <a
                        href={caso.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-zinc-300 transition mt-1"
                        aria-label={`Visitar ${caso.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">{caso.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {caso.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 bg-zinc-800/50 border border-zinc-800 rounded-md text-xs text-zinc-400 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 px-6 border-t border-zinc-900">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
            {/* TROCAR PELA FOTO REAL: substitua este div pela <img> da sua foto profissional */}
            <div className="aspect-square rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center mx-auto md:mx-0 w-[200px]">
              <div className="text-6xl font-medium text-zinc-700">W</div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">Sobre</div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Wellington Souza</h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Desenvolvedor solo baseado em Curitiba. Trabalho com Google Cloud, IA generativa
                  (Vertex AI, Gemini, Claude) e front-end moderno.
                </p>
                <p>
                  Comecei construindo minha própria plataforma SaaS — Run Your Trip — antes de
                  perceber que o que pequenos negócios e profissionais individuais realmente
                  precisam é o oposto de complexidade. Precisam de ferramentas simples que poupem
                  tempo e tragam cliente.
                </p>
                <p>
                  Hoje aplico o mesmo conhecimento técnico em escala humana: sites que carregam
                  rápido, automações que economizam horas do dia, atendimento com IA que paciente
                  acha natural usar. Sem promessa milagrosa, sem buzzword.
                </p>
                <p className="text-zinc-400">
                  Se quiser conversar antes de contratar, é só me chamar. Sem compromisso.
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-lg text-sm font-medium transition"
              >
                <MessageCircle className="w-4 h-4" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contato — ATUALIZADO: background SVG + tela de sucesso impactante */}
      <section id="contato" className="relative py-24 px-6 border-t border-zinc-900 overflow-hidden">
        {/* Background visual sutil */}
        <img
          src="/contato-bg.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
              Contato
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Vamos conversar?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Me conta sobre sua clínica em 30 minutos, sem custo. Te respondo se faz sentido a
              gente trabalhar junto — e se não fizer, te aponto o caminho certo.
            </p>
          </div>

          {formStatus === 'success' ? (
            // Tela de sucesso impactante
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
              </div>

              <div className="relative rounded-2xl border border-amber-400/20 bg-gradient-to-b from-amber-400/[0.04] to-zinc-900/40 backdrop-blur-sm p-10 md:p-16 text-center">
                <div className="relative inline-flex mb-8">
                  <div className="absolute inset-0 w-20 h-20 rounded-full bg-amber-400/30 animate-ping" />
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 shadow-lg shadow-amber-400/40">
                    <Check className="w-10 h-10 text-zinc-950" strokeWidth={3} />
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                  Mensagem recebida.
                </h3>
                <p className="text-lg text-zinc-300 max-w-md mx-auto mb-3 leading-relaxed">
                  Te respondo pelo WhatsApp em até 4 horas, em horário comercial.
                </p>
                <p className="text-sm text-zinc-500 mb-10">
                  Pode fechar a página ou continuar explorando.
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>Resposta humana, sem fila automática</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Nome</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/50 transition"
                    placeholder="Como você quer ser chamado"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/50 transition"
                    placeholder="(41) 99999-9999"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-zinc-400 mb-2">E-mail</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/50 transition"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm text-zinc-400 mb-2">
                  Conta um pouco sobre sua clínica{' '}
                  <span className="text-zinc-600">(opcional)</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/50 transition resize-none"
                  placeholder="Tipo de atendimento, principal dificuldade hoje, etc."
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={
                  formStatus === 'loading' ||
                  !formData.name ||
                  !formData.whatsapp ||
                  !formData.email
                }
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 disabled:bg-zinc-800 disabled:text-zinc-600 text-zinc-950 rounded-lg font-medium transition"
              >
                {formStatus === 'loading' ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar mensagem
                  </>
                )}
              </button>
              {formStatus === 'error' && (
                <p className="text-sm text-red-400 mt-3 text-center">
                  Algo deu errado. Me chama pelo WhatsApp que eu te respondo na hora.
                </p>
              )}
              <p className="text-xs text-zinc-500 mt-4 text-center">
                Suas informações ficam comigo. Não vendo, não compartilho, não mando spam.
              </p>
            </div>
          )}

          <div className="mt-8 text-center text-sm text-zinc-500">
            Ou me chama direto:{' '}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition"
            >
              WhatsApp
            </a>
            {' · '}
            <a
              href="mailto:contato@souzawellington.com.br"
              className="text-amber-400 hover:text-amber-300 transition"
            >
              contato@souzawellington.com.br
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <div className="font-semibold tracking-tight mb-2">
                Wellington <span className="text-amber-400">Souza</span>
              </div>
              <p className="text-sm text-zinc-500">
                Desenvolvimento web + IA pra profissionais com consultório próprio.
              </p>
              <p className="text-sm text-zinc-500 mt-1">Curitiba, PR</p>
            </div>

            <div className="flex flex-col md:items-end gap-2 text-sm text-zinc-500">
              <div className="flex gap-4">
                <a
                  href="https://www.runyourtrip.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300 transition"
                >
                  Run Your Trip
                </a>
                <a href="#" className="hover:text-zinc-300 transition">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-zinc-300 transition">
                  GitHub
                </a>
              </div>
              <div className="text-xs text-zinc-600 mt-2">© 2026 Wellington Vieira de Souza</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
